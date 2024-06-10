import prisma from "../../../prisma/index.js";

const read = async (req, res) => {
    try {
        const data = await prisma.chapter.findMany(
            {
                where: {
                    subjectId: req.params.subjectId
                }
            }
        );
        res.status(200).send({ data: data });
    }
    catch (err) {
        res.status(500).send(err);
    }
}

export default read;