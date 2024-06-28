import prisma from "../../../prisma/index.js";

const del = async (req, res) => {
    try {
        const data = await prisma.pages.delete({
            where: {
                id: req.params.id
            }
        });
        res.status(200).send(data);
    }
    catch (err) {
        res.status(500).send({ message: err });
    }
}

export default del;