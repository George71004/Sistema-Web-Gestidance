PGDMP                       }            gestidancedb    17.2    17.2     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            �           1262    16388    gestidancedb    DATABASE     �   CREATE DATABASE gestidancedb WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Venezuela.1252';
    DROP DATABASE gestidancedb;
                     postgres    false            �           0    0    DATABASE gestidancedb    COMMENT     W   COMMENT ON DATABASE gestidancedb IS 'Bd del proyecto de la materia ''Base de Datos''';
                        postgres    false    4859            �            1259    16389 	   categoria    TABLE     Z   CREATE TABLE public.categoria (
    nombre "char" NOT NULL,
    cantbailarines integer
);
    DROP TABLE public.categoria;
       public         heap r       postgres    false            �            1259    16437    usuario    TABLE     �   CREATE TABLE public.usuario (
    iduser integer NOT NULL,
    correo character varying(50) NOT NULL,
    "contraseña" character varying(50) NOT NULL
);
    DROP TABLE public.usuario;
       public         heap r       postgres    false            �            1259    16436    usuario_iduser_seq    SEQUENCE     �   CREATE SEQUENCE public.usuario_iduser_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.usuario_iduser_seq;
       public               postgres    false    219            �           0    0    usuario_iduser_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.usuario_iduser_seq OWNED BY public.usuario.iduser;
          public               postgres    false    218            [           2604    16440    usuario iduser    DEFAULT     p   ALTER TABLE ONLY public.usuario ALTER COLUMN iduser SET DEFAULT nextval('public.usuario_iduser_seq'::regclass);
 =   ALTER TABLE public.usuario ALTER COLUMN iduser DROP DEFAULT;
       public               postgres    false    218    219    219            �          0    16389 	   categoria 
   TABLE DATA           ;   COPY public.categoria (nombre, cantbailarines) FROM stdin;
    public               postgres    false    217   C       �          0    16437    usuario 
   TABLE DATA           @   COPY public.usuario (iduser, correo, "contraseña") FROM stdin;
    public               postgres    false    219   `       �           0    0    usuario_iduser_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.usuario_iduser_seq', 1, true);
          public               postgres    false    218            ]           2606    16393    categoria categoria_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.categoria
    ADD CONSTRAINT categoria_pkey PRIMARY KEY (nombre);
 B   ALTER TABLE ONLY public.categoria DROP CONSTRAINT categoria_pkey;
       public                 postgres    false    217            _           2606    16444    usuario usuario_correo_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_correo_key UNIQUE (correo);
 D   ALTER TABLE ONLY public.usuario DROP CONSTRAINT usuario_correo_key;
       public                 postgres    false    219            a           2606    16442    usuario usuario_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (iduser);
 >   ALTER TABLE ONLY public.usuario DROP CONSTRAINT usuario_pkey;
       public                 postgres    false    219            �      x������ � �      �   '   x�3��M��qH�H�-�I�K���442615����� �Mg     