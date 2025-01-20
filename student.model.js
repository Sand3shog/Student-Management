
import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
    address: String,
    dateOfBirth: Date,
    gender: String,
    hasScholarship: Boolean,
});

// create table/ model/ collection
const Student = mongoose.model('Student', studentSchema);
export default Student;