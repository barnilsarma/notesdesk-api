import prisma from "../../../prisma/index.js";

const deleteLib = async (req, res) => {
    try {
        const del = await prisma.library.delete({
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

export default deleteLib;