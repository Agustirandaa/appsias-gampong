import Input from "@Elements/Input"
import { Plus, Pen, Image } from "@Icons"
import Button from "@Elements/Button"
import Select from "@Elements/Select"
import OptionSelect from "@Elements/Select/OptionSelect"
import CKEditor from "@Elements/CKEditor"
import * as React from 'react'
import { useForm, usePage } from "@inertiajs/react"

export default function FormPosting({ editPostingData = null }) {

    const { category } = usePage().props

    const {data, setData, post, errors} = useForm({
        title: editPostingData ? editPostingData.title : '',
        excerpt: editPostingData ? editPostingData.excerpt : '',
        category_id: editPostingData ? editPostingData.category_id : (category.length > 0 ? category[0].id : ''),
        image: null,
        content: editPostingData ? editPostingData.content : '',
        
        ...(editPostingData && {old_image: editPostingData.image}),
        
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            editPostingData ? post(`/dashboard/posting/update/${editPostingData.id}`) : post('/dashboard/posting')
        }catch(error) {
            console.log("Errornya :" + error);
        }
    }

    return (
        <form onSubmit={handleSubmit} encType="multipart/form-data" className="grid grid-cols-5 gap-10 p-5 rounded-xl">
            <div className="col-span-5 space-y-8 xl:col-span-2">
                <Input 
                    label="Title Posting" 
                    name="title" 
                    type="text" 
                    value={data.title} 
                    onChange={(e) => setData('title', e.target.value)}
                    icon={<Pen color={`text-blue-600`} size={`18`} />} 
                    required />

                <Input 
                    label="Ringkasan Posting" 
                    name="excerpt" 
                    type="text" 
                    value={data.excerpt} 
                    maxLength={255}
                    onChange={(e) => setData('excerpt', e.target.value)}
                    icon={<Pen color={`text-blue-600`} size={`18`} />} 
                    required />

                <Select 
                label="Category" 
                name="category_id" 
                value={data.category_id}
                onChange={(e) => setData('category_id', e.target.value)} >
                    <OptionSelect value="" disabled>Select</OptionSelect>
                    {category.map((option, index) => (
                    <OptionSelect key={index} value={option.id}>{option.name}</OptionSelect>
                    ))}
                </Select>

                <Input 
                    label="Images" 
                    name="image" 
                    type="file"
                    onChange={(e) => setData('image', e.target.files[0])}
                    icon={<Image color={`text-blue-600`} size={`18`} />} 
                    required = {editPostingData ? false : true}
                    />
                    {errors.image && ( <p className="text-xs text-red-500 font-inter">{errors.image}</p> )}
                    { editPostingData && (
                        <a href={`/${data.old_image}`} target="_blank" className="block px-5 py-2 text-sm text-white bg-blue-500 rounded-full hover:bg-blue-600 font-inter ">Gambar Lama : {data.old_image.replace('post-images/', '')}</a>
                    )}

            </div>

            <div className="col-span-5 xl:col-span-3">
                <CKEditor 
                    label="Content" 
                    name="content" 
                    value={data.content}
                    onChange={(e) => setData('content', e)} 
                />
            </div>


            <Button type="submit" variant={`rounded-md flex items-center w-32 gap-1 bg-blue-600 text-white font-semibold px-4 py-1`}>
            <Plus color="text-white" size="20" />
                Simpan
            </Button>

        </form>
    )
}

