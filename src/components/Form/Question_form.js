import React ,{useState} from 'react'

import CropOriginalIcon  from '@material-ui/icons/CropOriginal'
import CheckBoxIcon  from '@material-ui/icons/CheckBox'
import ShortTextIcon  from '@material-ui/icons/ShortText'
import SubjectIcon  from '@material-ui/icons/Subject'
import MoreVertIcon  from '@material-ui/icons/MoreVert'
import FilterNoneIcon from '@material-ui/icons/FilterNone'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import TextFieldsIcon from '@material-ui/icons/TextFields'
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo'
import CloseIcon from '@material-ui/icons/Close'


import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'
import Switch from '@material-ui/core/Switch'
import Accordion from '@material-ui/core/Accordion'
import Button from '@material-ui/core/Button'
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import FormControlLabel from '@material-ui/core/FormControlLabel'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import {IconButton, Typography} from '@material-ui/core'

import {BsTrash} from 'react-icons/bs'
import {BsFileText} from 'react-icons/bs'
import {FcRightUp} from 'react-icons/fc'
import './Question_form.css'


function Question_form() {
    function QuestionUI() {
        const [questions,setQuestions] = useState(
            [{
                questionText: 'Question',
                questionType: 'radio',
                option: [
                    {optionText: 'Tùy chọn 1'}
                ],
                open: true,
                required:false,
            }]
        )
        function handleChange(e,i){
            var newQuestion =[...questions]
            newQuestion[i].questionText = e.target.value
            setQuestions(newQuestion)
        }
        function removeOption(i,j){
            var newQuestion =[...questions]
            if(newQuestion[i].option.length >1){
                newQuestion[i].option.splice(j,1)
                setQuestions(newQuestion)
                console.log(i,j);
            }
            console.log(questions);
        }
        function addQuestionType(i,type){
            var qs =[...questions]
            qs[i].questionType = type
            setQuestions(qs)
        }
        function changeOptionText(text,i,j){
            var newQuestion =[...questions]
            newQuestion[i].option[j] = text
            setQuestions(newQuestion)
        }
        function copyQuestion(pev){
            // expandCloseAll()
            let qs = [...questions]
            setQuestions([...questions,pev])
            console.log('copy');
        }
        function addOption(i){
            let newQuestion =[...questions]
            const length = newQuestion[i].option.length
            if( length<5){
                newQuestion[i].option.push({optionText:`Tùy chọn ${length +1}`})
                setQuestions(newQuestion)
            }
            else{
                alert('Tối đa 5 tùy chọn')
            }
        }
        console.log(questions);
        const [age, setAge] = useState(questions.questionType);

        return (questions.map((ques,i)=>(
            <Accordion expanded={ques.open}  className={ques.open ? 'add border':''}>
                <AccordionSummary
                    className='save'
                    aria-control='panelia-content'
                    id='panelia-header'
                    elevantion ={1} style={{width:'100%'}}
                >
                        {!questions[i].open ? (
                            <div className='saved_questions'>
                                <Typography style={{fontSize:'15px',fontWeight:'400',letterSpacing:'.1px',lineHeight:'24px',paddingBottom:'8px'}}>
                                    {i+1}.  {ques.questionText}
                                </Typography>

                                {ques.option.map((opsText, j) =>(
                                    <div key={j}>
                                        <div style={{display:'flex'}}>
                                            <FormControlLabel
                                            disabled
                                            style={{marginLeft:'5px',marginBottom:'5px'}}
                                            control={<input
                                                style={{marginRight:'3px'}}
                                                type={ques.questionType}
                                                color='primary'
                                                required={ques.type}/>}
                                                label={
                                                    <Typography
                                                    style={{
                                                        fontSize:'13px',
                                                        fontWeight:'400',
                                                        letterSpacing:'.2px',
                                                        lineHeight:'20px',
                                                        color:'#202124'
                                                    }}>
                                                        {opsText.optionText}
                                                    </Typography>
                                                }/>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ):''}

                </AccordionSummary>

                <div className='question_boxes'>
                    <AccordionDetails className='add_question'>
                        <div className='add_question_top'>
                            <input key ={i}
                            value={questions[i].questionText}
                            onChange={(e)=>{handleChange(e,i)}}
                            type='text'
                            className='question'
                            ></input>
                            <CropOriginalIcon/>
                            <Select
                                className='select'
                                style={{color:'#5f6368',fontSize:'16px',lineHeight:'20px' ,display:'flex',alignItems:'center',paddingLeft:'8px'}}
                                value={age}
                                onChange={(e)=>setAge(e.target.value)}
                                displayEmpty
                            >
                                <MenuItem id="text" value='Text' onClick={()=>{addQuestionType(i,'text')}}><SubjectIcon style={{marginRight:'10px'}} /> Đoạn</MenuItem>
                                <MenuItem id ='checkbox' value='Checkbox' onClick={()=>{addQuestionType(i,'checkbox')}}><CheckBoxIcon style={{marginRight:'10px', color:'#70757a'}} /> Hộp kiểm</MenuItem>
                                <MenuItem id='radio' value='Radio' checked onClick={()=>{addQuestionType(i,'radio')}}><RadioButtonCheckedIcon style={{marginRight:'10px', color:'#70757a'}} /> Trắc nghiệm</MenuItem>
                            </Select>
                        </div>
                        {ques.option.map((op,j)=>(
                            <div className='add_question_body' key={j}>
                                <div>
                                {
                                    (ques.questionType!= 'text') ?
                                        <input
                                            type={ques.questionType}
                                            style={{marginRight:'10px'}}
                                        />:
                                    <ShortTextIcon style={{marginRight:'10px'}}/>
                                }
                                    <input
                                    type='text'
                                    className='text_input'
                                    placeholder ='option'
                                    value={ques.option[j].optionText}
                                    onChange={(e)=>{changeOptionText(e.target.value,i,j)}}
                                    />
                                </div>
                                <div style={{display:'flex',alignItems: 'center'}}>
                                    <IconButton className='add_question_body_ori'>
                                        <CropOriginalIcon/>
                                    </IconButton>
                                    <IconButton
                                    onClick={()=>{
                                        removeOption(i,j)
                                    console.log(i,j);}}
                                    aria-label='delete'
                                    >
                                        <CloseIcon/>
                                    </IconButton>
                                </div>
                            </div>
                        ))}

                        {ques.option.length <6 ?(
                            <div className='add_question_body'>
                                <FormControlLabel disabled
                                control={
                                    (ques.questionType!= 'text') ?
                                    <input type={ques.questionType} color='primary' inputProps={{'aria-label':'secondary checkbox'}} style={{marginRight:'10px',marginLeft:'10px'}} disabled/>:
                                    <ShortTextIcon style={{marginRight:'10px'}}/>
                                }
                                label={
                                    <div>
                                        <input type='text' className='text_input' style={{fontSize:'13px',width:'68px'}} placeholder='Add other' onClick={()=>{addOption(i)}}></input>
                                        <Button size='small' style={{textTransform:'none',color:'4285f4',fontSize:'13px',fontWeight:'600'}}>Add Option</Button>
                                    </div>
                                }/>
                            </div>
                        ):''
                        }
                        <div className='add_footer'>
                            <div className='add_question_bottom_left'>
                                <Button size='small' style={{textTransform:'none',color:'#4285f4',fontSize:'14px'}}>
                                    <FcRightUp style={{border:'2px solid #4285f4',padding:'2px',marginRight:'8px'}}/>
                                    Answer key
                                </Button>
                            </div>
                            <div className='add_question_bottom'>
                                <IconButton aria-label='Copy'
                                onClick={()=>{copyQuestion(ques)}}>
                                    <FilterNoneIcon/>
                                </IconButton>
                                <IconButton aria-label='delete'>
                                    <BsTrash/>
                                </IconButton>
                                <IconButton >
                                    <span style={{color:'#5f6368',fontSize:'13px'}}>Required</span>
                                    <Switch name='checkedA' color='primary' checked/>
                                </IconButton>
                                <IconButton>
                                    <MoreVertIcon/>
                                </IconButton>
                            </div>
                        </div>

                    </AccordionDetails>
                    <div className='question_edit'>
                        <AddCircleOutlineIcon className='edit'/>
                        <OndemandVideoIcon className='edit'/>
                        <CropOriginalIcon className='edit'/>
                        <TextFieldsIcon className='edit'/>
                    </div>
                </div>

            </Accordion>
        )))
    }
    const [titleTopName,setTitleTopName] = useState('Mẫu không có tiêu đề')
    return (
    <div className='question_form'>
        <br></br>
        <div className='section'>
            <div className='section_title'>
                <div className='section_title_top'>
                    <input
                    value={titleTopName}
                    onChange={(e)=>setTitleTopName(e.target.value)}
                    type='text'
                    className='section_title_top_name'
                    placeholder='Tiêu đề biểu mẫu'
                    />
                    <input type='text' className='section_title_top_desc' placeholder='Mô tả biểu mẫu'/>
                </div>
            </div>
            <QuestionUI/>
        </div>

    </div>
)
}

export default Question_form