var exports = module.exports = {};

exports.getPerson = function (req, res, connection) {
   
	var data = {
		data:''
	};

	connection.query('SELECT * from tbl_person', function(err, rows, fields) {
		if(err) res.status(500).send('ERROR');
		if(rows.length != 0) {
			data['data'] = rows;
			res.status(200).json(data);
		} else {
			res.status(204).send('NO CONTENT');
		}
	});
};

exports.setPerson = function (req, res, connection) {

	var nameInput = req.body.name;
	var lastnameInput = req.body.lastname;

	connection.query('INSERT INTO tbl_person (name, lastname) VALUES (?, ?)', [nameInput, lastnameInput], function (err, results, fields) {
		if(err) {
			res.status(500).send('ERROR');
		} else {
			res.status(201).send('SUCCESS');
		}
	});
};




