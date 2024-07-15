use anchor_lang::prelude::*;

declare_id!("6XATLwUuF3me1FTYUfNkkgXDfBZmZYZaSRwvvxB278Z2");

#[program]
pub mod mans {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
