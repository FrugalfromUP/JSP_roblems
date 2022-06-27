< script >
    function getUnion(a, n, b, m) {

        // Defining set container s
        var s = new Set();

        // Inserting array elements in s
        for (let i = 0; i < n; i++)
            s.add(a[i]);

        for (let i = 0; i < m; i++)
            s.add(b[i]);
        document.write(
            "Number of elements after union operation: " +
            s.size + "<br>");
        document.write("The union set of both arrays is :");
        document.write("<br>");
        var arr = [];
        for (let itr of s)
            arr.push(itr);
        // s will contain only distinct
        // elements from array a and b
        arr.sort(function(a, b) { return a - b; })
        for (let i = 0; i < arr.length; i++) {
            document.write(arr[i] + " ");
        }
    }


let a = [5, 3];
let b = [1, 2, 3 4, 5];

getUnion(a, 2, b, 5); <
/script>