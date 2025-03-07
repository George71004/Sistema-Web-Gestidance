PGDMP  8                     }            gestidancedb    17.2    17.2 5    4           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false            5           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            6           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            7           1262    16388    gestidancedb    DATABASE     �   CREATE DATABASE gestidancedb WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Venezuela.1252';
    DROP DATABASE gestidancedb;
                     postgres    false            8           0    0    DATABASE gestidancedb    COMMENT     W   COMMENT ON DATABASE gestidancedb IS 'Bd del proyecto de la materia ''Base de Datos''';
                        postgres    false    4919            �            1259    16446 	   academias    TABLE     �   CREATE TABLE public.academias (
    nombre character varying(100) NOT NULL,
    fechainsc date,
    nombdirect character varying(20),
    tlfdirect character varying(50)
);
    DROP TABLE public.academias;
       public         heap r       postgres    false            �            1259    16451 
   bailarines    TABLE     �   CREATE TABLE public.bailarines (
    cedula integer NOT NULL,
    fecha_nacimiento date,
    instagram character varying(50),
    sexo character varying(1),
    nombre_academia character varying(100)
);
    DROP TABLE public.bailarines;
       public         heap r       postgres    false            �            1259    16461 
   categorias    TABLE     �   CREATE TABLE public.categorias (
    nombre character varying(20) NOT NULL,
    cant_hombres integer,
    cant_mujeres integer
);
    DROP TABLE public.categorias;
       public         heap r       postgres    false            �            1259    16505    evaluaciones    TABLE     g   CREATE TABLE public.evaluaciones (
    puntuacion integer,
    numeroj integer,
    numerop integer
);
     DROP TABLE public.evaluaciones;
       public         heap r       postgres    false            �            1259    16536    incluyentes    TABLE     R   CREATE TABLE public.incluyentes (
    numerop integer,
    cedulabaila integer
);
    DROP TABLE public.incluyentes;
       public         heap r       postgres    false            �            1259    16489    jurados    TABLE     �   CREATE TABLE public.jurados (
    numero integer NOT NULL,
    nombre character varying(20),
    aspecto character varying(50)
);
    DROP TABLE public.jurados;
       public         heap r       postgres    false            �            1259    16488    jurado_numero_seq    SEQUENCE     �   CREATE SEQUENCE public.jurado_numero_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.jurado_numero_seq;
       public               postgres    false    223            9           0    0    jurado_numero_seq    SEQUENCE OWNED BY     H   ALTER SEQUENCE public.jurado_numero_seq OWNED BY public.jurados.numero;
          public               postgres    false    222            �            1259    16467    participaciones_gen    TABLE     �   CREATE TABLE public.participaciones_gen (
    numero integer NOT NULL,
    nombre_academia character varying(100),
    nombre_categoria character varying(20),
    posicion integer,
    cedula_bailarin integer,
    puntuacion integer
);
 '   DROP TABLE public.participaciones_gen;
       public         heap r       postgres    false            �            1259    16466    participacion_numero_seq    SEQUENCE     �   CREATE SEQUENCE public.participacion_numero_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.participacion_numero_seq;
       public               postgres    false    221            :           0    0    participacion_numero_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public.participacion_numero_seq OWNED BY public.participaciones_gen.numero;
          public               postgres    false    220            �            1259    16518    participaciones    TABLE     �   CREATE TABLE public.participaciones (
    nombreacad character varying(100),
    nombrecat character varying(20),
    numerop integer
);
 #   DROP TABLE public.participaciones;
       public         heap r       postgres    false            �            1259    16496    usuarios    TABLE     �   CREATE TABLE public.usuarios (
    iduser integer NOT NULL,
    correo character varying(50),
    "contraseña" character varying(50)
);
    DROP TABLE public.usuarios;
       public         heap r       postgres    false            �            1259    16495    usuario_iduser_seq    SEQUENCE     �   CREATE SEQUENCE public.usuario_iduser_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.usuario_iduser_seq;
       public               postgres    false    225            ;           0    0    usuario_iduser_seq    SEQUENCE OWNED BY     J   ALTER SEQUENCE public.usuario_iduser_seq OWNED BY public.usuarios.iduser;
          public               postgres    false    224            z           2604    16492    jurados numero    DEFAULT     o   ALTER TABLE ONLY public.jurados ALTER COLUMN numero SET DEFAULT nextval('public.jurado_numero_seq'::regclass);
 =   ALTER TABLE public.jurados ALTER COLUMN numero DROP DEFAULT;
       public               postgres    false    222    223    223            y           2604    16470    participaciones_gen numero    DEFAULT     �   ALTER TABLE ONLY public.participaciones_gen ALTER COLUMN numero SET DEFAULT nextval('public.participacion_numero_seq'::regclass);
 I   ALTER TABLE public.participaciones_gen ALTER COLUMN numero DROP DEFAULT;
       public               postgres    false    221    220    221            {           2604    16499    usuarios iduser    DEFAULT     q   ALTER TABLE ONLY public.usuarios ALTER COLUMN iduser SET DEFAULT nextval('public.usuario_iduser_seq'::regclass);
 >   ALTER TABLE public.usuarios ALTER COLUMN iduser DROP DEFAULT;
       public               postgres    false    225    224    225            &          0    16446 	   academias 
   TABLE DATA           M   COPY public.academias (nombre, fechainsc, nombdirect, tlfdirect) FROM stdin;
    public               postgres    false    217   �@       '          0    16451 
   bailarines 
   TABLE DATA           `   COPY public.bailarines (cedula, fecha_nacimiento, instagram, sexo, nombre_academia) FROM stdin;
    public               postgres    false    218   �@       (          0    16461 
   categorias 
   TABLE DATA           H   COPY public.categorias (nombre, cant_hombres, cant_mujeres) FROM stdin;
    public               postgres    false    219   �@       /          0    16505    evaluaciones 
   TABLE DATA           D   COPY public.evaluaciones (puntuacion, numeroj, numerop) FROM stdin;
    public               postgres    false    226   �@       1          0    16536    incluyentes 
   TABLE DATA           ;   COPY public.incluyentes (numerop, cedulabaila) FROM stdin;
    public               postgres    false    228   A       ,          0    16489    jurados 
   TABLE DATA           :   COPY public.jurados (numero, nombre, aspecto) FROM stdin;
    public               postgres    false    223   *A       0          0    16518    participaciones 
   TABLE DATA           I   COPY public.participaciones (nombreacad, nombrecat, numerop) FROM stdin;
    public               postgres    false    227   GA       *          0    16467    participaciones_gen 
   TABLE DATA              COPY public.participaciones_gen (numero, nombre_academia, nombre_categoria, posicion, cedula_bailarin, puntuacion) FROM stdin;
    public               postgres    false    221   dA       .          0    16496    usuarios 
   TABLE DATA           A   COPY public.usuarios (iduser, correo, "contraseña") FROM stdin;
    public               postgres    false    225   �A       <           0    0    jurado_numero_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.jurado_numero_seq', 1, false);
          public               postgres    false    222            =           0    0    participacion_numero_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.participacion_numero_seq', 1, false);
          public               postgres    false    220            >           0    0    usuario_iduser_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.usuario_iduser_seq', 3, true);
          public               postgres    false    224            }           2606    16450    academias academia_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY public.academias
    ADD CONSTRAINT academia_pkey PRIMARY KEY (nombre);
 A   ALTER TABLE ONLY public.academias DROP CONSTRAINT academia_pkey;
       public                 postgres    false    217                       2606    16455    bailarines bailarin_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.bailarines
    ADD CONSTRAINT bailarin_pkey PRIMARY KEY (cedula);
 B   ALTER TABLE ONLY public.bailarines DROP CONSTRAINT bailarin_pkey;
       public                 postgres    false    218            �           2606    16465    categorias categoria_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.categorias
    ADD CONSTRAINT categoria_pkey PRIMARY KEY (nombre);
 C   ALTER TABLE ONLY public.categorias DROP CONSTRAINT categoria_pkey;
       public                 postgres    false    219            �           2606    16494    jurados jurado_pkey 
   CONSTRAINT     U   ALTER TABLE ONLY public.jurados
    ADD CONSTRAINT jurado_pkey PRIMARY KEY (numero);
 =   ALTER TABLE ONLY public.jurados DROP CONSTRAINT jurado_pkey;
       public                 postgres    false    223            �           2606    16472 &   participaciones_gen participacion_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public.participaciones_gen
    ADD CONSTRAINT participacion_pkey PRIMARY KEY (numero);
 P   ALTER TABLE ONLY public.participaciones_gen DROP CONSTRAINT participacion_pkey;
       public                 postgres    false    221            �           2606    16503    usuarios usuario_correo_key 
   CONSTRAINT     X   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuario_correo_key UNIQUE (correo);
 E   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuario_correo_key;
       public                 postgres    false    225            �           2606    16501    usuarios usuario_pkey 
   CONSTRAINT     W   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (iduser);
 ?   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuario_pkey;
       public                 postgres    false    225            �           2606    16456 (   bailarines bailarin_nombre_academia_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.bailarines
    ADD CONSTRAINT bailarin_nombre_academia_fkey FOREIGN KEY (nombre_academia) REFERENCES public.academias(nombre);
 R   ALTER TABLE ONLY public.bailarines DROP CONSTRAINT bailarin_nombre_academia_fkey;
       public               postgres    false    4733    217    218            �           2606    16508     evaluaciones evalua_numeroj_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.evaluaciones
    ADD CONSTRAINT evalua_numeroj_fkey FOREIGN KEY (numeroj) REFERENCES public.jurados(numero);
 J   ALTER TABLE ONLY public.evaluaciones DROP CONSTRAINT evalua_numeroj_fkey;
       public               postgres    false    226    223    4741            �           2606    16513     evaluaciones evalua_numerop_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.evaluaciones
    ADD CONSTRAINT evalua_numerop_fkey FOREIGN KEY (numerop) REFERENCES public.participaciones_gen(numero);
 J   ALTER TABLE ONLY public.evaluaciones DROP CONSTRAINT evalua_numerop_fkey;
       public               postgres    false    226    221    4739            �           2606    16544 $   incluyentes incluye_cedulabaila_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.incluyentes
    ADD CONSTRAINT incluye_cedulabaila_fkey FOREIGN KEY (cedulabaila) REFERENCES public.bailarines(cedula);
 N   ALTER TABLE ONLY public.incluyentes DROP CONSTRAINT incluye_cedulabaila_fkey;
       public               postgres    false    4735    218    228            �           2606    16539     incluyentes incluye_numerop_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.incluyentes
    ADD CONSTRAINT incluye_numerop_fkey FOREIGN KEY (numerop) REFERENCES public.participaciones_gen(numero);
 J   ALTER TABLE ONLY public.incluyentes DROP CONSTRAINT incluye_numerop_fkey;
       public               postgres    false    228    221    4739            �           2606    16521 )   participaciones participa_nombreacad_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.participaciones
    ADD CONSTRAINT participa_nombreacad_fkey FOREIGN KEY (nombreacad) REFERENCES public.academias(nombre);
 S   ALTER TABLE ONLY public.participaciones DROP CONSTRAINT participa_nombreacad_fkey;
       public               postgres    false    217    227    4733            �           2606    16526 (   participaciones participa_nombrecat_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.participaciones
    ADD CONSTRAINT participa_nombrecat_fkey FOREIGN KEY (nombrecat) REFERENCES public.categorias(nombre);
 R   ALTER TABLE ONLY public.participaciones DROP CONSTRAINT participa_nombrecat_fkey;
       public               postgres    false    227    219    4737            �           2606    16531 &   participaciones participa_numerop_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.participaciones
    ADD CONSTRAINT participa_numerop_fkey FOREIGN KEY (numerop) REFERENCES public.participaciones_gen(numero);
 P   ALTER TABLE ONLY public.participaciones DROP CONSTRAINT participa_numerop_fkey;
       public               postgres    false    221    4739    227            �           2606    16483 6   participaciones_gen participacion_cedula_bailarin_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.participaciones_gen
    ADD CONSTRAINT participacion_cedula_bailarin_fkey FOREIGN KEY (cedula_bailarin) REFERENCES public.bailarines(cedula);
 `   ALTER TABLE ONLY public.participaciones_gen DROP CONSTRAINT participacion_cedula_bailarin_fkey;
       public               postgres    false    221    218    4735            �           2606    16473 6   participaciones_gen participacion_nombre_academia_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.participaciones_gen
    ADD CONSTRAINT participacion_nombre_academia_fkey FOREIGN KEY (nombre_academia) REFERENCES public.academias(nombre);
 `   ALTER TABLE ONLY public.participaciones_gen DROP CONSTRAINT participacion_nombre_academia_fkey;
       public               postgres    false    221    4733    217            �           2606    16478 7   participaciones_gen participacion_nombre_categoria_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.participaciones_gen
    ADD CONSTRAINT participacion_nombre_categoria_fkey FOREIGN KEY (nombre_categoria) REFERENCES public.categorias(nombre);
 a   ALTER TABLE ONLY public.participaciones_gen DROP CONSTRAINT participacion_nombre_categoria_fkey;
       public               postgres    false    4737    221    219            &      x������ � �      '      x������ � �      (      x������ � �      /      x������ � �      1      x������ � �      ,      x������ � �      0      x������ � �      *      x������ � �      .   %   x�3�,(*MMJt R��F�&�f\�HbF0�=... :�     