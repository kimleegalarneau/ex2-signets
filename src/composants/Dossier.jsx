import './Dossier.scss';
import SortIcon from '@material-ui/icons/Sort';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { grey } from '@material-ui/core/colors';

export default function Dossier({id, titre, couleur, dateModif}) {
  return (
    <article className="Dossier" style={{backgroundColor: couleur}}
    >
      <div className="couverture" >
        <span className="deplacer">
            <div className="cercle">
              <SortIcon fontSize="large"/>
            </div>
        </span>
        <img src={`images-dossiers/${id}.png`} alt={titre}/>
      </div>
      <div className="info">
        <h2>{titre}</h2>
        <p>Modifié : {dateModif}</p>
      </div>
      <button>
        <MoreVertIcon style={{fill: "white"}}/>
      </button>
    </article>
  );
}