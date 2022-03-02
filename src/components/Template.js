import React from 'react'
import './Template.css'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import {IconButton} from '@material-ui/core'

import blank from '../image/forms-blank-googlecolors.png'
import contact from '../image/1p-ycZA_Ihhg4WA8ccQN-eIFjVACGq7syHx0IWQMxLY0_400.png'
import rsvp from '../image/1kkUjv3G7-PgOEUPMTiKvKResxGxS7MTsy5Amj4b0Trw_400.png'
import party from '../image/1m0UYQl1LSGxl3sGsh9_xjim4hUYQ8BO_zbvcFXv1Qug_400.png'
import tshirt from '../image/134dbGrMBrHFEfdPk5UpsZWEBZb7xJrOKRdESE58Fvcg_400.png'
import event from '../image/1pM0fD5FWTXCGw4h0g1WSP8Nj3mS56l1EaCZAec-p2uc_400.png'
import uuid from 'react-uuid'
import {useNavigate} from 'react-router-dom'


function Template() {
    let id = uuid()
    let nav = useNavigate()
    function createForm() {
        nav('form/'+id)
    }
    return (
        <div className="template_section">
            <div className="template_top">
                <div className="template_left">
                    <span style={{fontSize:'16px',color:'#202124'}}>Bắt đầu biểu mẫu mới</span>
                </div>
                <div className="template_right">
                    <div className="gallery_button">
                        Thư viện mẫu
                        <UnfoldMoreIcon fontSize='small'/>
                    </div>
                    <IconButton>
                        <MoreVertIcon fontSize='small'/>
                    </IconButton>
                </div>
            </div>
            <div className="template_body">
                <div className="card" onClick={createForm}>
                    <img className="card_img" src={blank} />
                    <div className="card_title">Trống</div>
                </div>
                <div className="card">
                    <img className="card_img" src={contact} />
                    <div className="card_title">Thông tin liên hệ</div>
                </div>
                <div className="card">
                    <img className="card_img" src={rsvp} />
                    <div className="card_title">Trả lời sự kiện</div>
                </div>
                <div className="card">
                    <img className="card_img" src={party} />
                    <div className="card_title">Lời mời dự tiệc</div>
                </div>
                <div className="card">
                    <img className="card_img" src={tshirt} />
                    <div className="card_title">Đăng ký áo phông</div>
                </div>
                <div className="card">
                    <img className="card_img" src={event} />
                    <div className="card_title">Đăng ký sự kiện</div>
                </div>
            </div>

        </div>
    )
}

export default Template