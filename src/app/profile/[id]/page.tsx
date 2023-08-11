export default function userProfile({params}:any){
    return   <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-slate-800">
        <p className="text-4xl">Profile {params.id}</p>
    </div>
}