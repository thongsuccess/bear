var mysql = require("mysql");
var db = {};
db.query = function sqlback(sqllan, fn) {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'sql_list',
        port: 3306
    })
    connection.connect(function(err) {
        if (err) {
            console.log(err);
            return;
        }
    })
    var sql = sqllan;
    if (!err) return;
    connection.query(sql, function(err, rows, fields) {
        if (err) {
            console.log(err);
            return;
        }
        fn(rows);
    })
    connection.end(function(err) {
        if (err) {
            return;
        } else {
            console.log('连接关闭');
        }
    })
}
module.exports = db;


/* 
host表示mysql安装的地址，因为我是本地的数据库，所以直接使用localhost

user表示mysql的用户名

password表示mysql的密码

database表示你要选择操作的具体的库的名字

port表示端口，可不填，默认就是3306
*/

/* 第一步需要引入以mysql包， 然后我们创建一个空对象， 并且给他赋值一个叫query的方法， 这个方法接受两个参数， 第一个参数是你查询数据时候的sql语句， 第二个参数是获取查询结果的回调函数。 */