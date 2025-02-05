PGDMP      4                }            gestidancedb    17.2    17.2 5    4           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false            5           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            6           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            7           1262    16388    gestidancedb    DATABASE     �   CREATE DATABASE gestidancedb WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Venezuela.1252';
    DROP DATABASE gestidancedb;
                     postgres    false            8           0    0    DATABASE gestidancedb    COMMENT     W   COMMENT ON DATABASE gestidancedb IS 'Bd del proyecto de la materia ''Base de Datos''';
                        postgres    false    4919            �            1259    16446    academia    TABLE     �   CREATE TABLE public.academia (
    nombre character varying(100) NOT NULL,
    fechainsc date,
    nombdirect character varying(20),
    tlfdirect character varying(50)
);
    DROP TABLE public.academia;
       public         heap r       postgres    false            �            1259    16451    bailarin    TABLE     �   CREATE TABLE public.bailarin (
    cedula integer NOT NULL,
    fecha_nacimiento date,
    instagram character varying(50),
    sexo character varying(1),
    nombre_academia character varying(100)
);
    DROP TABLE public.bailarin;
       public         heap r       postgres    false            �            1259    16461 	   categoria    TABLE     �   CREATE TABLE public.categoria (
    nombre character varying(20) NOT NULL,
    cant_hombres integer,
    cant_mujeres integer
);
    DROP TABLE public.categoria;
       public         heap r       postgres    false            �            1259    16505    evalua    TABLE     a   CREATE TABLE public.evalua (
    puntuacion integer,
    numeroj integer,
    numerop integer
);
    DROP TABLE public.evalua;
       public         heap r       postgres    false            �            1259    16536    incluye    TABLE     N   CREATE TABLE public.incluye (
    numerop integer,
    cedulabaila integer
);
    DROP TABLE public.incluye;
       public         heap r       postgres    false            �            1259    16489    jurado    TABLE     �   CREATE TABLE public.jurado (
    numero integer NOT NULL,
    nombre character varying(20),
    aspecto character varying(50)
);
    DROP TABLE public.jurado;
       public         heap r       postgres    false            �            1259    16488    jurado_numero_seq    SEQUENCE     �   CREATE SEQUENCE public.jurado_numero_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.jurado_numero_seq;
       public               postgres    false    223            9           0    0    jurado_numero_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.jurado_numero_seq OWNED BY public.jurado.numero;
          public               postgres    false    222            �            1259    16518 	   participa    TABLE     �   CREATE TABLE public.participa (
    nombreacad character varying(100),
    nombrecat character varying(20),
    numerop integer
);
    DROP TABLE public.participa;
       public         heap r       postgres    false            �            1259    16467    participacion    TABLE     �   CREATE TABLE public.participacion (
    numero integer NOT NULL,
    nombre_academia character varying(100),
    nombre_categoria character varying(20),
    posicion integer,
    cedula_bailarin integer,
    puntuacion integer
);
 !   DROP TABLE public.participacion;
       public         heap r       postgres    false            �            1259    16466    participacion_numero_seq    SEQUENCE     �   CREATE SEQUENCE public.participacion_numero_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.participacion_numero_seq;
       public               postgres    false    221            :           0    0    participacion_numero_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.participacion_numero_seq OWNED BY public.participacion.numero;
          public               postgres    false    220            �            1259    16496    usuario    TABLE     �   CREATE TABLE public.usuario (
    iduser integer NOT NULL,
    correo character varying(50),
    "contraseña" character varying(50)
);
    DROP TABLE public.usuario;
       public         heap r       postgres    false            �            1259    16495    usuario_iduser_seq    SEQUENCE     �   CREATE SEQUENCE public.usuario_iduser_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.usuario_iduser_seq;
       public               postgres    false    225            ;           0    0    usuario_iduser_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.usuario_iduser_seq OWNED BY public.usuario.iduser;
          public               postgres    false    224            z           2604    16492    jurado numero    DEFAULT     n   ALTER TABLE ONLY public.jurado ALTER COLUMN numero SET DEFAULT nextval('public.jurado_numero_seq'::regclass);
 <   ALTER TABLE public.jurado ALTER COLUMN numero DROP DEFAULT;
       public               postgres    false    222    223    223            y           2604    16470    participacion numero    DEFAULT     |   ALTER TABLE ONLY public.participacion ALTER COLUMN numero SET DEFAULT nextval('public.participacion_numero_seq'::regclass);
 C   ALTER TABLE public.participacion ALTER COLUMN numero DROP DEFAULT;
       public               postgres    false    221    220    221            {           2604    16499    usuario iduser    DEFAULT     p   ALTER TABLE ONLY public.usuario ALTER COLUMN iduser SET DEFAULT nextval('public.usuario_iduser_seq'::regclass);
 =   ALTER TABLE public.usuario ALTER COLUMN iduser DROP DEFAULT;
       public               postgres    false    225    224    225            &          0    16446    academia 
   TABLE DATA           L   COPY public.academia (nombre, fechainsc, nombdirect, tlfdirect) FROM stdin;
    public               postgres    false    217   �>       '          0    16451    bailarin 
   TABLE DATA           ^   COPY public.bailarin (cedula, fecha_nacimiento, instagram, sexo, nombre_academia) FROM stdin;
    public               postgres    false    218   ?       (          0    16461 	   categoria 
   TABLE DATA           G   COPY public.categoria (nombre, cant_hombres, cant_mujeres) FROM stdin;
    public               postgres    false    219   6?       /          0    16505    evalua 
   TABLE DATA           >   COPY public.evalua (puntuacion, numeroj, numerop) FROM stdin;
    public               postgres    false    226   S?       1          0    16536    incluye 
   TABLE DATA           7   COPY public.incluye (numerop, cedulabaila) FROM stdin;
    public               postgres    false    228   p?       ,          0    16489    jurado 
   TABLE DATA           9   COPY public.jurado (numero, nombre, aspecto) FROM stdin;
    public               postgres    false    223   �?       0          0    16518 	   participa 
   TABLE DATA           C   COPY public.participa (nombreacad, nombrecat, numerop) FROM stdin;
    public               postgres    false    227   �?       *          0    16467    participacion 
   TABLE DATA           y   COPY public.participacion (numero, nombre_academia, nombre_categoria, posicion, cedula_bailarin, puntuacion) FROM stdin;
    public               postgres    false    221   �?       .          0    16496    usuario 
   TABLE DATA           @   COPY public.usuario (iduser, correo, "contraseña") FROM stdin;
    public               postgres    false    225   �?       <           0    0    jurado_numero_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.jurado_numero_seq', 1, false);
          public               postgres    false    222            =           0    0    participacion_numero_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.participacion_numero_seq', 1, false);
          public               postgres    false    220            >           0    0    usuario_iduser_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.usuario_iduser_seq', 3, true);
          public               postgres    false    224            }           2606    16450    academia academia_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.academia
    ADD CONSTRAINT academia_pkey PRIMARY KEY (nombre);
 @   ALTER TABLE ONLY public.academia DROP CONSTRAINT academia_pkey;
       public                 postgres    false    217                       2606    16455    bailarin bailarin_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.bailarin
    ADD CONSTRAINT bailarin_pkey PRIMARY KEY (cedula);
 @   ALTER TABLE ONLY public.bailarin DROP CONSTRAINT bailarin_pkey;
       public                 postgres    false    218            �           2606    16465    categoria categoria_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.categoria
    ADD CONSTRAINT categoria_pkey PRIMARY KEY (nombre);
 B   ALTER TABLE ONLY public.categoria DROP CONSTRAINT categoria_pkey;
       public                 postgres    false    219            �           2606    16494    jurado jurado_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.jurado
    ADD CONSTRAINT jurado_pkey PRIMARY KEY (numero);
 <   ALTER TABLE ONLY public.jurado DROP CONSTRAINT jurado_pkey;
       public                 postgres    false    223            �           2606    16472     participacion participacion_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.participacion
    ADD CONSTRAINT participacion_pkey PRIMARY KEY (numero);
 J   ALTER TABLE ONLY public.participacion DROP CONSTRAINT participacion_pkey;
       public                 postgres    false    221            �           2606    16503    usuario usuario_correo_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_correo_key UNIQUE (correo);
 D   ALTER TABLE ONLY public.usuario DROP CONSTRAINT usuario_correo_key;
       public                 postgres    false    225            �           2606    16501    usuario usuario_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (iduser);
 >   ALTER TABLE ONLY public.usuario DROP CONSTRAINT usuario_pkey;
       public                 postgres    false    225            �           2606    16456 &   bailarin bailarin_nombre_academia_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.bailarin
    ADD CONSTRAINT bailarin_nombre_academia_fkey FOREIGN KEY (nombre_academia) REFERENCES public.academia(nombre);
 P   ALTER TABLE ONLY public.bailarin DROP CONSTRAINT bailarin_nombre_academia_fkey;
       public               postgres    false    4733    217    218            �           2606    16508    evalua evalua_numeroj_fkey    FK CONSTRAINT     ~   ALTER TABLE ONLY public.evalua
    ADD CONSTRAINT evalua_numeroj_fkey FOREIGN KEY (numeroj) REFERENCES public.jurado(numero);
 D   ALTER TABLE ONLY public.evalua DROP CONSTRAINT evalua_numeroj_fkey;
       public               postgres    false    226    223    4741            �           2606    16513    evalua evalua_numerop_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.evalua
    ADD CONSTRAINT evalua_numerop_fkey FOREIGN KEY (numerop) REFERENCES public.participacion(numero);
 D   ALTER TABLE ONLY public.evalua DROP CONSTRAINT evalua_numerop_fkey;
       public               postgres    false    226    221    4739            �           2606    16544     incluye incluye_cedulabaila_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.incluye
    ADD CONSTRAINT incluye_cedulabaila_fkey FOREIGN KEY (cedulabaila) REFERENCES public.bailarin(cedula);
 J   ALTER TABLE ONLY public.incluye DROP CONSTRAINT incluye_cedulabaila_fkey;
       public               postgres    false    4735    218    228            �           2606    16539    incluye incluye_numerop_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.incluye
    ADD CONSTRAINT incluye_numerop_fkey FOREIGN KEY (numerop) REFERENCES public.participacion(numero);
 F   ALTER TABLE ONLY public.incluye DROP CONSTRAINT incluye_numerop_fkey;
       public               postgres    false    228    221    4739            �           2606    16521 #   participa participa_nombreacad_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.participa
    ADD CONSTRAINT participa_nombreacad_fkey FOREIGN KEY (nombreacad) REFERENCES public.academia(nombre);
 M   ALTER TABLE ONLY public.participa DROP CONSTRAINT participa_nombreacad_fkey;
       public               postgres    false    217    227    4733            �           2606    16526 "   participa participa_nombrecat_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.participa
    ADD CONSTRAINT participa_nombrecat_fkey FOREIGN KEY (nombrecat) REFERENCES public.categoria(nombre);
 L   ALTER TABLE ONLY public.participa DROP CONSTRAINT participa_nombrecat_fkey;
       public               postgres    false    227    219    4737            �           2606    16531     participa participa_numerop_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.participa
    ADD CONSTRAINT participa_numerop_fkey FOREIGN KEY (numerop) REFERENCES public.participacion(numero);
 J   ALTER TABLE ONLY public.participa DROP CONSTRAINT participa_numerop_fkey;
       public               postgres    false    221    4739    227            �           2606    16483 0   participacion participacion_cedula_bailarin_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.participacion
    ADD CONSTRAINT participacion_cedula_bailarin_fkey FOREIGN KEY (cedula_bailarin) REFERENCES public.bailarin(cedula);
 Z   ALTER TABLE ONLY public.participacion DROP CONSTRAINT participacion_cedula_bailarin_fkey;
       public               postgres    false    221    218    4735            �           2606    16473 0   participacion participacion_nombre_academia_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.participacion
    ADD CONSTRAINT participacion_nombre_academia_fkey FOREIGN KEY (nombre_academia) REFERENCES public.academia(nombre);
 Z   ALTER TABLE ONLY public.participacion DROP CONSTRAINT participacion_nombre_academia_fkey;
       public               postgres    false    221    4733    217            �           2606    16478 1   participacion participacion_nombre_categoria_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.participacion
    ADD CONSTRAINT participacion_nombre_categoria_fkey FOREIGN KEY (nombre_categoria) REFERENCES public.categoria(nombre);
 [   ALTER TABLE ONLY public.participacion DROP CONSTRAINT participacion_nombre_categoria_fkey;
       public               postgres    false    4737    221    219            &      x������ � �      '      x������ � �      (      x������ � �      /      x������ � �      1      x������ � �      ,      x������ � �      0      x������ � �      *      x������ � �      .   %   x�3�,(*MMJt R��F�&�f\�HbF0�=... :�     