import mongoose from 'mongoose';
import { Project, Form } from '../interfaces';
export declare const ProjectModel: mongoose.Model<Project, {}, {}, {}, mongoose.Document<unknown, {}, Project> & Omit<Project & Required<{
    _id: string;
}>, never>, mongoose.Schema<Project, mongoose.Model<Project, any, any, any, mongoose.Document<unknown, any, Project> & Omit<Project & Required<{
    _id: string;
}>, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Project, mongoose.Document<unknown, {}, mongoose.FlatRecord<Project>> & Omit<mongoose.FlatRecord<Project> & Required<{
    _id: string;
}>, never>>>;
export declare const FormModel: mongoose.Model<Form, {}, {}, {}, mongoose.Document<unknown, {}, Form> & Omit<Form & {
    _id: mongoose.Types.ObjectId;
}, never>, mongoose.Schema<Form, mongoose.Model<Form, any, any, any, mongoose.Document<unknown, any, Form> & Omit<Form & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Form, mongoose.Document<unknown, {}, mongoose.FlatRecord<Form>> & Omit<mongoose.FlatRecord<Form> & {
    _id: mongoose.Types.ObjectId;
}, never>>>;
