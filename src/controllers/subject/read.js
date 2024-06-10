import prisma from "../../../prisma/index.js";

const read = async (req, res) => {
    try {
        const data = await prisma.subject.findMany({
            where: {
                libraryId: req.params.libraryId
            }
        });
        res.status(200).send({ data: data });
    }
    catch (err) {
        res.status(500).send(err);
    }
}

export default read;