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
    },
    async deleteItem(parent, args, ctx, info) {
        const where = { id: args.id };
        // 1. Find the item
        const item = await ctx.db.query.item({ where }, `{id, title}`);
        // 2. Check if they own that item, or have the permissions
        // TODO
        // 3. Delete it!
        return ctx.db.mutation.deleteItem({ where }, info);
    }
};

module.exports = Mutations;
