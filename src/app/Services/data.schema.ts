export interface User{
    email: string, 
    password: string,
    token: string,
    role: string,
}

export interface StudentData{
    id:number,
    studnum_fld: number,
    fname_fld:string,
    mname_fld:string,
    lname_fld:string,
    extname_fld:string,
    dept_fld:string,
    program_fld:string,
    profilepic_fld:string,
}

export interface CreateBooks{
    booktitle_fld: string,
    booked_fld: string,
    author_fld: string,
    datepub_fld: string,
    categ_fld: string,
    bookdet_fld: string,
    coverpic_fld: null,
    publisher_fld: string,
    code_fld: string,
}

export interface StudentRequest{
    booktitle_fld: string,
    booked_fld: string,
    studname_fld: string,
    studnum_fld: number,
    dept_fld: string,
    datereq_fld: string,
    datereturn_fld: string,
    reqcode_fld: string,
   
}