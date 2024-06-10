import prisma from "../../../prisma/index.js";

const update = async (req, res) => {
    try {
        const upd = await prisma.chapter.update({
            where: {
                id: req.params.id
            },
            data: {
                user: req.body?.user,
                title: req.body?.title,
                pages: req.body?.pages
            }
        });
        res.status(200).send("Successfully updated!!");
    }
    catch (err) {
        res.status(500).send(err);
    }
}

export default update;