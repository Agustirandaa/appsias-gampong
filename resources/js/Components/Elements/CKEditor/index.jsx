import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Label from "@Elements/Input/Label";

export default function CustomCKEditor({label, name, value, onChange }) {

    
    return (
        <div className='space-y-3'>
        
        {label && (
            <Label htmlFor={label}>{label}</Label>
         )}

        <CKEditor
            name={name}
            editor={ClassicEditor}
            config={{
                toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote' ],
                image: {
                    toolbar: [ 'imageTextAlternative' ]
                }
            }}
            data={value}
            onChange={(event, editor) => {
                const data = editor.getData();
                onChange(data);
            }}
        />
        </div>
    );
}
