import {CheckCircle, Lock} from 'phosphor-react' 

interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'presencial' | 'remoto';
}

export function Lesson(props: LessonProps) {

    const isLessonAvailable = false;

    return (
        <a href="#">
        {/*    <span className="text-gray-300"> {props.availableAt.toString()} </span> */}

            <div className="rounded border border-blue-300 p-4 mt-2">
                <header className="flex items-center justify-between"> 
                    {isLessonAvailable ? (
                       <span className="text-sm text-blue-500 flex items-center gap-2">
                            <CheckCircle size={20} />
                            Começo 
                       </span>
                    ) : (
                        <span className="text-sm text-orange-500 flex items-center gap-2">
                        <Lock size={20} />
                         Em breve 
                        </span>
                    )}

                    <span className="text-white text-xsrounded px-2 border border-green-300 rounded-md"> 
                        
                        
                        {props.type == 'presencial' ? 'Presencial' : 'Remoto'}
                    </span>    
                 </header>

                <strong className="text-gray-200 mt-3 block"> 
                    {props.title}
                </strong>

            </div>

        </a>
    )
}