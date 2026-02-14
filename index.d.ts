interface Resource {
  Id: number;
  Url: string;
}

interface Type {
  Name: string;
  Value: string;
}

interface Grade {
  Id: number;
  Lesson: Resource;
  Subject: Resource;
  Student: Resource;
  Category: Resource;
  AddedBy: Resource;
  Grade: string;
  Date: string;
  AddDate: string;
  Semester: number;
  IsConstituent: boolean;
  IsSemester: boolean;
  IsSemesterProposition: boolean;
  IsFinal: boolean;
  IsFinalProposition: boolean;
}

interface GradeCategory {
  Id: number;
  Color: Resource;
  Name: string;
  AdultsExtramural: boolean;
  AdultsDaily: boolean;
  Standard: boolean;
  IsReadOnly: string;
  CountToTheAverage: boolean;
  Weight: number;
  BlockAnyGrades: boolean;
  ObligationToPerform: boolean;
}

interface GradeComment {
  Id: number;
  AddedBy: Resource;
  Grade: Resource;
  Text: string;
}

interface Lesson {
  Id: number;
  Teacher: Resource;
  Subject: Resource;
}

interface GradesCommentsResponse {
  Comment: GradeComment[];
}

interface GradesCategoriesResponse {
  Categories: GradeCategory[];
}

interface GradesResponse {
  Grades: Grade[];
}

interface GradesTypesResponse {
    Types: Type[];
}

interface LessonsResponse {
  Lessons: Lesson[];
}

export class LibrusAPI {
  constructor();

  activateApiAccess(): Promise<any>;
  mkToken(login: string, pass: string): Promise<any>;
  /* Grades API */
  getGrades(): Promise<GradesResponse>;
  getGradesAverages(): Promise<any>; //idk jak to dziala mam wylaczone xd
  getGradesCategoriesAverages(): Promise<any>; //tak samo
  getGradesCategories(id?: any): Promise<GradesCategoriesResponse>;
  getGradesComments(id?: any): Promise<GradesCommentsResponse>;
  getGradesScales(): Promise<any>; //acces is denied
  getGradesTypes(): Promise<GradesTypesResponse>;
  getGradesUnpreparednessPerSemesterAndSubject(): Promise<any>; //whar
  /* Point Grades API */ //to w ogole nie dziala po co to jest tf
  getPointGrades(): Promise<any>;
  getPointGradesCategories(): Promise<any>;
  getPointGradesDictionaries(): Promise<any>;
  getPointGradesAverages(): Promise<any>;
  getPointGradesStudentsAverages(): Promise<any>;
  getPointGradesCategoriesAverages(): Promise<any>;
  /* Behaviour Grades API */
  getBehaviourGrades(): Promise<any>;
  getBehaviourGradesTypes(): Promise<any>;
  getBehaviourGradesPoints(): Promise<any>;
  getBehaviourGradesPointsCategories(): Promise<any>;
  getBehaviourGradesPointsComments(): Promise<any>;
  getBehaviourGradesSystemProposal(): Promise<any>;
  /* Lessons API */
  getLessons(id?: string): Promise<LessonsResponse>;
  getAttendances(): Promise<any>;
  getAttendancesTypes(): Promise<any>;
  getAttendancesLessonsStatistics(id?: any): Promise<any>;
  getAttendancesFilledByTeacher(id?: string): Promise<any>;
  getSubjects(id?: string): Promise<any>;
  /* Calendar API */
  getCalendar(id?: string): Promise<any>;
  getCalendarSubstitutions(id?: string): Promise<any>;
  getHomeWorks(): Promise<any>;
  getHomeWorksCategories(id?: string): Promise<any>;
  getTimetables(): Promise<any>;
  getTimetablesDate(arg?: any): Promise<any>;
  getTimetablesNext(): Promise<any>;
  getTimetablesPrev(): Promise<any>;
  getSubstitutions(): Promise<any>;
  getTeacherFreeDays(): Promise<any>;
  /* School API */
  getSchool(): Promise<any>;
  getClassrooms(): Promise<any>;
  getSchoolNotices(): Promise<any>;
  getRealizationsTypesOfDays(): Promise<any>;
  getRealizationsTypesOfClasses(): Promise<any>;
  getLuckyNumber(): Promise<any>;
  /* Class API */
  getClassesFreeDays(): Promise<any>;
  getClasses(): Promise<any>;
  getClassesCrossedOutStudents(): Promise<any>;
  getVirtualClasses(): Promise<any>;
  //Messages
  getMessages(): Promise<any>;
  getUnreadMessagesCount(): Promise<any>;
  getMessage(id): Promise<any>;
  /* Other Endpoints */
  getHelp(): Promise<any>;
  getWhatsNew(): Promise<any>;
  getNotificationCenter(): Promise<any>;
  getColors(): Promise<any>;
  getUsers(id?: string): Promise<any>;
  getEndpoints(): Promise<any>;
  getMe(): Promise<any>;
  getAPI(endpoint: any): Promise<any>;
  returnApiURL(): string;
}
