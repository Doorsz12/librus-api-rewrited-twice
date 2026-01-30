export class LibrusAPI {
  constructor();
  /* Authentication */
  activateApiAccess(): Promise<any>;
  mkToken(login: string, pass: string): Promise<any>;
  /* Grades API */
  getGrades(): Promise<any>;
  getGradesAverages(): Promise<any>;
  getGradesCategoriesAverages(): Promise<any>;
  getGradesCategories(id?: any): Promise<any>;
  getGradesComments(id?: any): Promise<any>;
  getGradesScales(): Promise<any>;
  getGradesTypes(): Promise<any>;
  getGradesUnpreparednessPerSemesterAndSubject(): Promise<any>;
  /* Point Grades API */
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
  getLessons(id?: string): Promise<any>;
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
