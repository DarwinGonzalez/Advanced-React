const Mutations = {

    async createItem(parent, args, ctx, info) {
        //TODO: Check if they are log in
        const item = await ctx.db.mutation.createItem({
            data: {
                ...args
            }
        }, info);
        return item;
    },

    async updateItem(parent, args, ctx, info) {
        // Fisrt take a copy of the update
        const updates = { ...args }
        // Remove the ID from the updates
        delete updates.id;
        // Run the update metthod
        const updatedItem = await ctx.db.mutation.updateItem({
            data: updates,
            where: {
                id: args.id
            }
        }, info);
        return updatedItem;
    }
};

module.exports = Mutations;
