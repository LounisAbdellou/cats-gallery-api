import { Injectable } from "@nestjs/common";
import { CreateAppointmentDto } from "./dto/create-appointment.dto";
import { Appointment } from "./entities/appointment.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Cat } from "src/cat/entities/cat.entity";
import { Repository } from "typeorm";

@Injectable()
export class AppointmentService {
  constructor(
    @InjectRepository(Cat) private readonly catRepository: Repository<Cat>,
    @InjectRepository(Appointment)
    private readonly appointmentRepository: Repository<Appointment>,
  ) {}

  async create(createAppointmentDto: CreateAppointmentDto) {
    const appointment: Appointment = new Appointment();
    const relatedCat = await this.catRepository.findOneBy({
      id: createAppointmentDto.catId,
    });

    appointment.cat = relatedCat;
    appointment.dateTime = createAppointmentDto.dateTime;

    return "This action adds a new appointment";
  }

  findAll() {
    return `This action returns all appointment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} appointment`;
  }
}
