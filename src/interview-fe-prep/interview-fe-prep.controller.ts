import { Controller, Get } from '@nestjs/common';
import movies from '../json/movies.json';

@Controller('interview-fe-prep')
export class InterviewFePrepController {
    @Get()
    findAll() {
        return movies;
    }
}
