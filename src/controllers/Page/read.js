import prisma from "../../../prisma/index.js";

const read = async (req, res) => {
    try {
        const data = await prisma.pages.findMany({
            where: {
                chapterId: req.params.chapterId
            }
        });
        res.status(200).send(data);
    }
    catch (err) {
        res.status(500).send({ message: err });
    }
}

export default read;