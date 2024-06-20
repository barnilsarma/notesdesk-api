import prisma from "../../../prisma/index.js";

const deletePage = async (req, res) => {
    try {
        const del = await prisma.page.delete({
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

export default deletePage;