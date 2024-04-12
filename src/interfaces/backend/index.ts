export interface GenericData {
   [key: string]: unknown;
}

export interface GenericError {
   type?: string | string[];
   code?: string | string[];
   detail?: string | string[];
   description?: string | string[];
}

export interface GenericResponse<T, E> {
   success: boolean;
   error?: E;
   errors?: E;
   data: T;
}

export interface GetParams {
   url: string;
   timeout: number;
}

export interface PostParams {
   url: string;
   timeout: number;
   body: GenericData;
}

export interface RequestLogin {
   user: string;
   password: string;
}

export interface ResponsetLogin {
   success: boolean;
   data: { [key: string]: unknown }
   error: string | { [key: string]: unknown }
}