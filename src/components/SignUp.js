import { useState } from "react";
import { Input, Button, P, Center } from "./Components";
import Logo from "../assets/img/Logo.svg";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { postSignUp } from "../services/mywallet.js"


export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const navigate = useNavigate();
    function Sign(e) {
        e.preventDefault();
        if (password != repeatPassword) {
            alert("As senhas não coincidem")
            setPassword('');
            setRepeatPassword('');
            return;
        }
        let body = { email, password, name }
        postSignUp(body)
            .then(navigate('/'))
            .catch((answer) => {
                console.log(answer)
            })
    }

    return (
        <form onSubmit={Sign}>
            <Center>
                <LogoWrapper src={Logo} alt="logo">
                </LogoWrapper>
                <Input
                    placeholder="Nome"
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                ></Input>
                <Input
                    placeholder="E-mail"
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                ></Input>
                <Input
                    placeholder="Senha"
                    required
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                ></Input>
                <Input
                    placeholder="Confirme a senha"
                    required
                    type="password"
                    value={repeatPassword}
                    onChange={e => setRepeatPassword(e.target.value)}
                ></Input>
                <Button>Cadastrar</Button>

                <Link to={'/'}><P>Já tem uma conta? Entre agora!</P></Link>
            </Center>

        </form>
    )

}
const LogoWrapper = styled.img`
    margin-bottom: 25px;
    margin-top:95px;
`