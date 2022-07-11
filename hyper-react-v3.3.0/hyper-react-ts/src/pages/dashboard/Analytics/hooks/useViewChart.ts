export default function useViewChart() {
    // generate random data
    const getRandomData = (length: number) => {
        var d = [];
        for (var idx = 0; idx < length; idx++) {
            d.push(Math.floor(Math.random() * 90) + 10);
        }
        return d;
    };

    var categories = [];
    for (var i = 10; i >= 1; i--) {
        categories.push(i + ' min ago');
    }

    return { categories, getRandomData };
}
