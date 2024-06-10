import prisma from "../../../prisma/index.js";

const deleteSub = async (req, res) => {
    try {
        const del = await prisma.subject.delete({
            where: {
                id: req.params.id
            }
        });
        res.status(200).send("Successfully delete!!");
    }
    catch (err) {
        res.status(500).send(err);
    }
}

export default deleteSub;