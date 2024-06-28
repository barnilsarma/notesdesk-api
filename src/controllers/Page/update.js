import prisma from "../../../prisma/index.js";

const upd = async (req, res) => {
    try {
        const data = await prisma.pages.update({
            where: {
                id: req.params.id
            },
            data: {
                page: req.body?.page
            }
        });
        res.status(200).send(data);
    }
    catch (err) {
        res.status(500).send({ message: err });
    }
}

export default upd;