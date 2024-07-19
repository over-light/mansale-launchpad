use anchor_lang::{prelude::*, solana_program::program::invoke_signed};
use anchor_spl::{
    associated_token::AssociatedToken,
    token::{mint_to, Mint, MintTo, Token, TokenAccount},
};
use mpl_token_metadata::instruction::create_metadata_accounts_v3;

declare_id!("6XATLwUuF3me1FTYUfNkkgXDfBZmZYZaSRwvvxB278Z2");
#[program]
mod mans {
    use super::*;
    pub fn init_token(ctx: Context<Initialize>, metadata: InitTokenParams) -> Result<()> {
        let seeds = &["mint".as_bytes(), &[*ctx.bumps.get("mint").unwrap()]];
        let signer = [&seeds[..]];

        let account_info = vec![
            ctx.accounts.metadata.to_account_info(),
            ctx.accounts.mint.to_account_info(),
            ctx.accounts.payer.to_account_info(),
            ctx.accounts.token_metadata_program.to_account_info(),
            ctx.accounts.token_program.to_account_info(),
            ctx.accounts.system_program.to_account_info(),
            ctx.accounts.rent.to_account_info(),
        ];

        invoke_signed(
            &create_metadata_accounts_v3(
                ctx.accounts.token_metadata_program.key(), // token metadata program
                ctx.accounts.metadata.key(),               // metadata account PDA for mint
                ctx.accounts.mint.key(),                   // mint account
                ctx.accounts.mint.key(),                   // mint authority
                ctx.accounts.payer.key(),                  // payer for transaction
                ctx.accounts.mint.key(),                   // update authority
                metadata.name,                             // name
                metadata.symbol,                           // symbol
                metadata.uri,                              // uri (offchain metadata)
                None,                                      // (optional) creators
                0,                                         // seller free basis points
                true,                                      // (bool) update authority is signer
                true,                                      // (bool) is mutable
                None,                                      // (optional) collection
                None,                                      // (optional) uses
                None,                                      // (optional) collection details
            ),
            account_info.as_slice(),
            &signer,
        )?;

        msg!("Token mint created successfully.");

        Ok(())
    }

    pub fn mint_tokens(ctx: Context<MintTokens>, quantity: u64) -> Result<()> {
        let seeds = &["mint".as_bytes(), &[*ctx.bumps.get("mint").unwrap()]];
        let signer = [&seeds[..]];

        mint_to(
            CpiContext::new_with_signer(
                ctx.accounts.token_program.to_account_info(),
                MintTo {
                    authority: ctx.accounts.mint.to_account_info(),
                    to: ctx.accounts.destination.to_account_info(),
                    mint: ctx.accounts.mint.to_account_info(),
                },
                &signer,
            ),
            quantity,
        )?;

        Ok(())
    }
}

#[derive(Accounts)]
#[instruction(
    params: InitTokenParams
)]
pub struct Initialize<'info> {
    /// CHECK: New Metaplex Account being created
    #[account(mut)]
    pub metadata: UncheckedAccount<'info>,
    #[account(
        init,
        seeds = [b"mint"],
        bump,
        payer = payer,
        mint::decimals = params.decimals,
        mint::authority = mint,
    )]
    pub mint: Account<'info, Mint>,
    #[account(mut)]
    pub payer: Signer<'info>,
    pub rent: Sysvar<'info, Rent>,
    pub system_program: Program<'info, System>,
    pub token_program: Program<'info, Token>,
    /// CHECK: Metaplex program ID
    pub token_metadata_program: UncheckedAccount<'info>,
}

#[derive(AnchorSerialize, AnchorDeserialize, Debug, Clone)]
pub struct InitTokenParams {
    pub name: String,
    pub symbol: String,
    pub uri: String,
    pub decimals: u8,
}

#[derive(Accounts)]
pub struct MintTokens<'info> {
    #[account(
        mut,
        seeds = [b"mint"],
        bump,
        mint::authority = mint,
    )]
    pub mint: Account<'info, Mint>,
    #[account(
        init_if_needed,
        payer = payer,
        associated_token::mint = mint,
        associated_token::authority = payer,
    )]
    pub destination: Account<'info, TokenAccount>,
    #[account(mut)]
    pub payer: Signer<'info>,
    pub rent: Sysvar<'info, Rent>,
    pub system_program: Program<'info, System>,
    pub token_program: Program<'info, Token>,
    pub associated_token_program: Program<'info, AssociatedToken>,
}
