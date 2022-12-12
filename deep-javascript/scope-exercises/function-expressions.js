function getStudentById(studentId) {
	return studentRecords.find(function (element) {
		return element.id === studentId
	});
}

function sortByName(a, b) {
	if (a.name < b.name) {
		return -1;
	}
	if (a.name > b.name) {
		return 1;
	}
	return 0;
}

function printRecords(recordIds) {
	const matchedStudents = recordIds.map(getStudentById);
	const sortedStudents = matchedStudents.sort(sortByName);

	sortedStudents.map(function (student) {
		console.log(`${student.name} (${student.id}): ${student.paid ? 'Paid' : 'Not Paid'}`);
	});
}

function paidStudentsToEnroll() {
	const matchedPaidButNotEnrolled = [];

	studentRecords.map(function (student) {
		if (student.paid && !currentEnrollment.includes(student.id)) {
			matchedPaidButNotEnrolled.push(student.id);
		}
	});

	return matchedPaidButNotEnrolled.concat(currentEnrollment);
}

function remindUnpaid(recordIds) {
	const unpaidStudents = recordIds.filter(function (id) {
		const student = getStudentById(id);

		if (!student.paid) {
			return student.id;
		}
	});

	printRecords(unpaidStudents);
}

// ********************************

var currentEnrollment = [410, 105, 664, 375];

var studentRecords = [
	{ id: 313, name: "Frank", paid: true, },
	{ id: 410, name: "Suzy", paid: true, },
	{ id: 709, name: "Brian", paid: false, },
	{ id: 105, name: "Henry", paid: false, },
	{ id: 502, name: "Mary", paid: true, },
	{ id: 664, name: "Bob", paid: false, },
	{ id: 250, name: "Peter", paid: true, },
	{ id: 375, name: "Sarah", paid: true, },
	{ id: 867, name: "Greg", paid: false, },
];

printRecords(currentEnrollment);
console.log("----");
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
console.log("----");
remindUnpaid(currentEnrollment);

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/
