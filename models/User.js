import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const UserSchema = new mongoose.Schema(
	{
		displayName: {
			type: String,
			trim: true,
			default: 'UserName',
		},
		fName: {
			type: String,
			require: [true, 'Please provide First name'],
			minlength: 2,
			trim: true,
		},
		lName: {
			type: String,
			require: [true, 'Please provide last name'],
			minlength: 2,
			default: 'lastname',
			trim: true,
		},
		email: {
			type: String,
			require: [true, 'Please provide email'],
			validate: {
				validator: validator.isEmail,
				message: 'Please provide a valid email',
			},
			unique: true,
		},
		password: {
			type: String,
			require: [true, 'Please provide password'],
			minlength: 6,
			select: false,
		},
		zipCode: {
			type: String,
			trim: true,
			required: [true, 'Please provide home zip code'],
		},
		taekwondo: {
			title: {
				type: String,
				default: 'Taekwondo',
			},
			location: {
				type: String,
				default: 'taekwondo',
			},
			enrolled: {
				type: Boolean,
				default: false,
			},
			startDate: Date,
			currentRank: {
				type: String,
				default: 'White Belt',
			},
			testReady: {
				type: Boolean,
				default: false,
			},
			nextTestDate: Date,
			currentTestScore: Number,
			previousTestScores: [Number],
		},
		biddemo: {
			title: {
				type: String,
				default: 'Bid Democracy',
			},
			location: {
				type: String,
				default: 'biddemocracy',
			},
			enrolled: {
				type: Boolean,
				default: false,
			},
			bidPointTotal: {
				type: Number,
				default: 0,
			},
			projectsOwned: Array,
			projectsWatching: Array,
		},
		trip: {
			title: {
				type: String,
				default: 'Trip Outreach',
			},
			location: {
				type: String,
				default: 'trip',
			},
			enrolled: {
				type: Boolean,
				default: false,
			},
			startDate: Date,
			rewardPointsTotal: {
				type: Number,
				default: 0
			},
			rewardHistory: Array,
			involvedProjects: Array,
			
		},

	},
	{ toObject: { virtuals: true }, toJSON: { virtuals: true } }
);

UserSchema.virtual('fullName').get(function () {
	return this.fName + ' ' + this.lName;
});
// UserSchema.virtual('location').get(function () {
// 	return this.title.toLowerCase().trim();
// });
UserSchema.pre('save', async function () {
	if (!this.isModified('password')) return;
	const salt = await bcrypt.genSaltSync(10);
	this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.createJWT = function () {
	return jwt.sign({ userId: this._id }, process.env.JSON_TOKEN, {
		expiresIn: '1d',
	});
};
UserSchema.methods.comparePassword = async function (userPassword) {
	const isMatch = await bcrypt.compare(userPassword, this.password);
	return isMatch;
};

export default mongoose.model('User', UserSchema);
