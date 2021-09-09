(function() {
    Mock.mock("/api/test-1", {
        code: 0,
        msg: null,
        data: {
            count: 100,
            "contents|10-50": [{
                "id|+1": 100001,
                name: "@cname",
                age: "@natural(25, 80)",
                date: "@date",
                province: "@province",
                city: "@city",
                country: "@country",
                email: "@email"
            }],
            headers: [
                {name: "姓名", prop: "name"},
                {name: "年龄", prop: "age"},
                {name: "出生日期", prop: "date"},
                {name: "地址", prop: "address"},
                {name: "邮箱", prop: "email"}
            ] 
        },
    });

    Mock.mock("/api/test-2", {
        code: 0,
        msg: null,
        data: [
            {name: "茄子", color: "#9950b4"},
            {name: "香蕉", color: "#eec513"},
            {name: "西瓜", color: "#e3443b"},
            {name: "猕猴桃", color: "#31b25f"}
        ]
    });
})();