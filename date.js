
exports.getDate = () => {

    const today = new Date();

    const formats = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    return today.toLocaleDateString("en-US", formats);
}

exports.getDay = () => {

    const today = new Date();

    const formats = {
        weekday: "long",
    };

    return today.toLocaleDateString("en-US", formats);
}