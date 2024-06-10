import prisma from "../../../prisma/index.js";

const deleteChap = async (req, res) => {
    try {
        const del = await prisma.chapter.delete({
            where: {
                id: req.params.id
            }
        });
        res.status(200).send("Successfully deleted!!");
    }
    catch (err) {
        res.status(500).send(err);
    }
}

export default deleteChap;