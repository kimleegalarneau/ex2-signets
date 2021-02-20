import avatar from '../images/avatar.png';
import './Entete.scss';
import Avatar from '@material-ui/core/Avatar';

export default function Entete() {
  return (
    <header className="Entete">
      <div className="logo">Signets</div>
      <div className="avatar">
        <div className="avatarText">Camille Semaan</div>
        <Avatar className="avatarImg" alt="Camille Semaan" src={avatar} />
      </div>
    </header>
  );
}