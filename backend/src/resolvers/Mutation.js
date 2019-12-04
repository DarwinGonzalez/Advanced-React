const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
    },
    async signup(parent, args, ctx, info) {
        // Lower case their email
        args.email = args.email.toLowerCase();
        // hash their password
        const password = await bcrypt.hash(args.password, 10);
        // create user in the database
        const user = await ctx.db.mutation.createUser({
            data: {
                ...args,
                password,
                permissions: { set: ['USER']},
            }
        }, info);
        // Create the JWT token for the user
        const token = jwt.sign({userId: user.id}, process.env.APP_SECRET);
        // We set the JWT as a cookie on the response
        ctx.response.cookie('token', token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year cookie
        });
        //Finally we return the user to the browser
        return user;
    }
};

module.exports = Mutations;
