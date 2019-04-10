import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
  ManyToOne
} from "typeorm";

import User from "./User";
import Meeting from "./Meeting";

@Entity()
class Day extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "timestamp" })
  pickDate: string;

  @ManyToOne(type => Meeting, meeting => meeting.meetingDays)
  asMeeting: Meeting;

  @ManyToMany(type => User, user => user.meetings)
  @JoinTable()
  participants: User[];

  @CreateDateColumn() createdAt: string;
  @UpdateDateColumn() updatedAt: string;
}

export default Day;
