import prisma from "../../../prisma/index.js";

const read = async (req, res) => {
    try {
        const data = await prisma.page.findMany(
            {
                where: {
                    chapterId: req.params.chapterId
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