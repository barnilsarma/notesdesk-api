import prisma from "../../../prisma/index.js";
const create = async (req, res) => {
    try {
        const action = await prisma.library.create({
            data: {
                user: req.body?.user,
                lib: req.body.lib
            }
        });
        res.status(200).send("done");
    }
    catch (err) {
        res.status(500).send(err);
    }
}

export default create;