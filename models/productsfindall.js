

Products.findAll({
    where: {
        $or: [
            Brand,
            {
                $eq: term
            },
            Category,
            {
                $eq: term
            },
            Item,
            {
                $eq: term
            },
        ]
    }
});

return Products;
