var me = {
FirstName: "Vasilios",
LastName: "Kambouras",
Age: 21,
getFullName : function() {
    return this.fname + ' ' + this.lname;
}
};}

};

console.log("Hi, my name is " + me.FirstName + " " + me.LastName + " and I am " + me.Age + ".")