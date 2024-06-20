import prisma from "../../../prisma/index.js";

const create = async (req, res) => {

    const action = await prisma.page.create({
        data: {
            image: req.body.image,
            Chapter: {
                connect: {
                    id: req.body.chapterId
                }
            }
        }
    });
    res.status(200).send("done");
}

export default create;