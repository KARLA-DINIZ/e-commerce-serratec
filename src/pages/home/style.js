import styled from 'styled-components';

export const HomePage = styled.div`
        background-color: #7c7ce0;
        margin-top: 28%;
        display: flex;
        justify-content: center;
        align-items:center;
        
    div{
            
        input{
            margin-top: 5px;
            width: 250px;
            height: 40px;
            display: block;
            margin-left: auto;
            padding: 8px;
            margin-right: auto;
            border: 0;
            background-color: #7c7ce0;
            color: #fff;
            border-bottom: 1px solid #fff;

            & + input{
                margin-bottom: -20px;
            }

            &::placeholder{
                color: #fff;
            }

            
        }
        button{
            display: block;
            width: 250px;
            height: 37px;
            background-color: #3ec300;           
            font-weight: bold;
            font-size: 16px;
            border: 0;
            color: #fff;
            border-radius: 6px;
            transition: 0.2s;
            margin: 25px;
            cursor: pointer;
            opacity: 0.9;

            & + button{
                margin-top: -20px;
                 
            }

            a{
                text-decoration: none;
                color: #fff;
            }

            &:hover{
                background-color: #46d900;
                color: #fafafa;
            }
        }
    }

`;

