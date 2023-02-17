from flask import Flask, request, render_template, redirect, url_for
from sqlalchemy import func

from models.db import Session, engine
from models.model import Usuario, tipoDocumento, ciudad


session = Session()

app = Flask(__name__)


@app.route("/")
def index():
    with engine.connect():
        u = Usuario
        t = tipoDocumento
        c = ciudad

        usuarios = (
            session.query(
                u.id,
                u.nombre.label("nombre_usuario"),
                u.apellido,
                t.nombre.label("nombre_doc"),
                u.documento,
                c.nombre.label("nombre_residen"),
                func.date(u.fechaNacimiento).label("fecha_nacimiento"),
                u.email,
                u.Usuario,
                u.telefono,
            )
            .join(t, u.idTipoDocumento == t.id)
            .join(c, u.lugarResidencia == c.id)
            .all()
        )
        return render_template("index.html", usuarios=usuarios)


@app.route("/usuario", methods=["POST"])
def store():
    _nombre = request.form["nombre"]
    _apellido = request.form["apellido"]
    _tipoDocumento = request.form["tipoDocumento"]
    _documento = request.form["documento"]
    _lugarResidencia = request.form["lugarResidencia"]
    _nacimiento = request.form["nacimiento"]
    _email = request.form["email"]
    _usuario = request.form["usuario"]
    _telefono = request.form["telefono"]
    _contrasenia = request.form["contraseña"]

    with engine.connect():
        nuevo_usuario = Usuario(
            nombre=_nombre,
            apellido=_apellido,
            idTipoDocumento=_tipoDocumento,
            documento=_documento,
            lugarResidencia=_lugarResidencia,
            fechaNacimiento=_nacimiento,
            email=_email,
            telefono=_telefono,
            Usuario=_usuario,
            contraseña=_contrasenia,
        )
        session.add(nuevo_usuario)
        session.commit()
    return redirect(url_for("index"))


@app.route("/delete/<string:id>")
def delete(id):
    with engine.connect():
        session.query(Usuario).filter_by(id=id).delete()
        session.commit()
        return redirect(url_for("index"))


@app.route("/edit/<string:_id>", methods=["POST"])
def edit(_id):
    _nombre = request.form["nombre"]
    _apellido = request.form["apellido"]
    _documento = request.form["documento"]
    _email = request.form["email"]
    _usuario = request.form["usuario"]
    _telefono = request.form["telefono"]
    with engine.connect():
        usuario = session.query(Usuario).filter_by(id=_id)
        usuario.update({Usuario.nombre: _nombre})
        usuario.update({Usuario.apellido: _apellido})
        usuario.update({Usuario.documento: _documento})
        usuario.update({Usuario.email: _email})
        usuario.update({Usuario.Usuario: _usuario})
        usuario.update({Usuario.telefono: _telefono})

        session.commit()

    return redirect(url_for("index"))


if __name__ == "__main__":
    app.run(debug=True)
