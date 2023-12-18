import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import users from './users';
import movies from './movies';
import userData from './userData';
import User from '../api/users/userModel';
import Movie from '../api/movies/movieModel';
import UserData from '../api/userData/userDataModel';

async function main() {
    if (process.env.NODE_ENV !== 'development') {
        console.log('This script is only for the development environment.');
        return;
    }
    await mongoose.connect(process.env.MONGO_DB);
    // Drop collections
    await User.collection.drop().catch(err => console.log('User collection not found'));
    await Movie.collection.drop().catch(err => console.log('Movie collection not found'));
    await UserData.collection.drop().catch(err => console.log('User data collection not found'));
    await User.create(users);
    await Movie.create(movies);
    await UserData.create(userData);
    console.log('Database initialised');
    console.log(`${users.length} users loaded`);
    console.log(`${movies.length} movies loaded`);
    console.log(`${userData.length} user data loaded`);
    await mongoose.disconnect();
}

main();