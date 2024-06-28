import prisma from "../../../prisma/index.js";

const create = async (req, res) => {
    try {
        const action = await prisma.pages.create({
            data: {
                page: req.body.page,
                Chapter: {
                    connect: {
                        id: req.body.chapterId
                    }
                }
            }
        });
        res.status(200).send(action);
    }
    catch (err) {
        res.status(500).send({ message: err });
    }
}

export default create;